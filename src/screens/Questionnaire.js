import React, { Component, useState } from 'react';
import {
  View,
  Text,
  Image, 
  TouchableOpacity,
  StyleSheet, 
  StatusBar,
} from 'react-native';
import MenuBtn from '../components/MenuBtn';
import RectangleImage from '../components/RectangleImage';
import Back from '../components/svgicons/Back';
import LinearGradient from 'react-native-linear-gradient';
import Info from '../components/svgicons/Info';
import { Actions } from 'react-native-router-flux';
import InfoModal from '../components/InfoModal';
import {colors, WIDTH, em} from '../common/constants';
import EvaluationModal from '../components/EvaluationModal';
import { getQuestionByCategoryAndId } from '../common/firebase/database';
import { AppActions, QuestionActions } from '../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notifications from '../common/onesignal/notifications';
import { goToWebBrowser } from '../common/utils/misc';
import { AdMobBanner } from 'react-native-admob';
import ReactInterval from 'react-interval';

let advIndex = 0;

class Questionnaire extends Component {
  ANSWER_TYPE_YES = 1;
  ANSWER_TYPE_NO = 2;
  ANSWER_TYPE_DUNNO = 3;

  qType = "";
  solution = "";
  isFromHistory = false;

  constructor(props) {
    super(props)
    this.state = {
      infoVisible: false,
      evaluationVisible: false,
      selectedAds: null,
      stopTimer: true
    }
  }

  UNSAFE_componentWillMount() {
    this.setAdvertisements();
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.state.infoVisible == nextState.infoVisible &&
        this.state.evaluationVisible == nextState.evaluationVisible){
      if (this.state.selectedAds === nextState.selectedAds)
        return false;
    }
    return true;
  }

  componentWillUnmount(){
    if (this.props.question.questions.length > 0){
      this.props.questionActions.removeLastQuestion()
    }
  }

  renderInfoModal(){
    const {info} = this.props.qinfo;
    if (!info) return null;

    const {title, content, image} = info;

    if (this.state.infoVisible){
      return (
          <InfoModal title={title} content={content} image={{uri:image}} isModalVisible={true} onPress={()=>{this.setState({infoVisible:false})}}/>
      )
    }else{
      return null;
    }
  }

  handleEvaluationSendClick(){
    this.setState({evaluationVisible:false})
    this.props.appActions.setEvaluated({evaluated:true});

    Actions.foundresult({qType, solution, isFromHistory})
  }

  handleEvaluationSkipClick(){
    this.setState({evaluationVisible:false})

    Actions.foundresult({qType:this.qType, solution:this.solution, isFromHistory:this.isFromHistory})
  }

  processFoundAnswer(qType, solution, isFromHistory){
    const {app} = this.props;
    if (!app.evaluated){
      this.qType = qType;
      this.solution = solution;
      this.isFromHistory = isFromHistory;
      this.setState({evaluationVisible:true});
    }else{
      Actions.foundresult({qType, solution, isFromHistory})
    }
  }

  handleAnswerClick(type){
    const { qinfo, qType, questionActions } = this.props;
    let qid = "";
    let answerText = "";
    if (type == this.ANSWER_TYPE_YES){
      qid = qinfo.yid;
      answerText = "Oui";
    }else if (type == this.ANSWER_TYPE_NO){
      qid = qinfo.nid;
      answerText = "Non";
    }else if (type == this.ANSWER_TYPE_DUNNO){
      qid = qinfo.did;
      answerText = "Je ne sais pas";
    }

    questionActions.addQuestion({
      "qid":qinfo['qid'],
      "title":qinfo['title'],
      "answerId":qid,
      "answerText":answerText
    })

    if (qid != ""){
      // Get the corresponding question
      const _this = this;
      getQuestionByCategoryAndId(qType, qid).then(res => {
        if (res['qid'] != undefined){
          Actions.questionnaire({qType:qType, qinfo:res})
        }else if (res['solution'] != undefined && res['solution'] != ""){
          if (_this.props) {
            const app = _this.props.app;
            const auth = _this.props.auth;
            const onesignalUserId = (app && app.onesignal && app.onesignal.userId) ? app.onesignal.userId : null;
            const isNotify = auth && auth.credential && auth.credential._user && auth.credential._user.receiveNoti;
            onesignalUserId && isNotify &&
              notifications.postAnswerResultNotification(onesignalUserId, res['solution']);
          }

          this.processFoundAnswer(qType, res['solution'], false)
        }else if (res['solution'] != undefined && res['solution'] == ""){
          Actions.noresult(this.props)
        }
      });
    }
  }

  handleGoBack(){
    Actions.pop();
  }

  handleClose(event){
    this.props.questionActions.clearQuestions();
    Actions.popTo('home');
  }

  handleAdFailedToLoad = (error) => {
    console.log('==== handleAdFailedToLoad: ', error);
    this.setState({ selectedAds: null });
    /* In the case gogle admob
    if (error && error.message) {
      if (error.message === "Invalid ad width or height: (414, 0)") return;
      // if (error.message === "Request Error: No ad to show.")
      // this.props.appActions && this.props.appActions.setAdMobId({adMobId: null});
    }
    */
  };

  onClickAds = (url) => {
    goToWebBrowser(url);
  }

  handleGoInfoWindow = () => {
    this.setState({infoVisible:true})
  }

  changeImageUrl2Https = (imageUrl) => {
    return imageUrl.replace('http://', 'https://');
  }

  renderEvaluationModal(){
    if (this.state.evaluationVisible){
      return (
        <EvaluationModal isModalVisible={true} onPressSend={this.handleEvaluationSendClick.bind(this)} onPressSkip={this.handleEvaluationSkipClick.bind(this)}/>
      )
    }else{
      return null;
    }
  }

  renderAdmob = () => {
    const { adMobId } = this.props.app;
    return (
      adMobId ? <AdMobBanner
        adSize="fullBanner"
        adUnitID={adMobId}
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => this.handleAdFailedToLoad(error)}
      /> :
      null
    );
  };

  setAdvertisements = () => {
    const { advertisements } = this.props.app;
    console.log('===== advertisements: ', advertisements);
    if (advertisements){
      const adsKeys = Object.keys(advertisements).reverse();
      for (var i = 0; i < adsKeys.length; i++) {
        const key = adsKeys[i];
        const adv = advertisements[key];
        if (i === advIndex) {
          console.log('===== set setate: ', adv);
          this.setState({selectedAds: adv}, () => {
            advIndex = ((advIndex + 1) === adsKeys.length) ? 0 : (advIndex + 1);
          });
          break;
        }
      }
    }
  };

  renderAdvertisements = () => {
    const { selectedAds } = this.state;
    console.log('==== renderAdvertisements: selectedAds: ', selectedAds && this.changeImageUrl2Https(selectedAds.image));
    return selectedAds ? (
      <TouchableOpacity
        // key={`touchableopacity-${i}`}
        onPress={() => this.onClickAds(selectedAds.linked_url)}
      >
        <Image
          // key={`image-${i}`}
          style={styles.advertisementImge}
          source={{ uri: this.changeImageUrl2Https(selectedAds.image) }}
          onError={error => this.handleAdFailedToLoad(error)}
        />
      </TouchableOpacity>
    ) : null;
  }

  render(){
    const {qinfo} = this.props;
    const {info} = qinfo;
    const { selectedAds } = this.state;
    console.log('===== selectedAds: ', selectedAds);
    console.log("QUESTIONNAIR!", qinfo['title']);
    return (
      <View style={{flex:1}}>

        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={colors[this.props.qType][0]} />
          <View style={styles.headerContainer}>
            <LinearGradient
              start={{x: 0, y: 0}} end={{x: 0, y: 1}}
              colors={colors[this.props.qType]}
              style={{flex:0.9}}>

                <View style={{flex: 1, flexDirection: "column"}}>

                  <View style={{flexDirection:'row',
                                padding: 20*em,
                                justifyContent:'flex-end',
                                alignItems:'center'}}>
                    <View style={{flex:1, paddingLeft:50*em, alignItems:'center'}}><Image source={require("../Assets/tina_header.png")} style={{height: 30*em, width: 71*em}} resizeMode={"cover"}/></View>
                    <MenuBtn image={"close"} onPress={this.handleClose.bind(this)}/>
                  </View>

                  <View style={{flex:1}}>
                    <View style={styles.absolute}>
                      <View style={{position: 'absolute', right: 30*em, bottom: 100*em}}>
                        <RectangleImage image={"T1"} size={33*em} />
                      </View>

                      <View style={{position: 'absolute', left: 30*em, bottom: 150*em}}>
                      <RectangleImage image={"T2"} size={25*em} />
                      </View>

                      <View style={{position: 'absolute', right: 80*em, top: 60*em}}>
                        <RectangleImage image={"T3"} size={17*em} />
                      </View>
                    </View>

                    <View style={styles.absolute, {flex:1, alignItems:"center", flexDirection:"column-reverse"}}>
                        <Image source={require('../Assets/tina_logo_2.png')} style={{width: 240*em, height:240*em}} resizeMode={'stretch'} />
                    </View>
                  </View>
                </View>
            </LinearGradient>
          </View>

          <View style={styles.contentContainer}>
            <Image source={require('../Assets/questionair_split.png')} style={{width: WIDTH, height: WIDTH*0.4}} resizeMode={'stretch'} />

            <TouchableOpacity style={styles.ButtonWrapper} elevation={20} onPress={this.handleGoBack}>
              <Back width={15*em} height={15*em}/>
            </TouchableOpacity>

            <View style={styles.contentWrapper}>

              <Text style={styles.questionText}>
                {this.props.qinfo.title}
              </Text>

              <View style={{flex: 1, flexDirection:"column-reverse"}}>

                <View style={styles.progressWrapper}>

                  <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={colors[this.props.qType]}
                    style={{width: Math.random() * WIDTH, height: 20*em}}>
                  </LinearGradient>

                </View>

                <View style={styles.answerWrapper}>
                    <TouchableOpacity style={StyleSheet.flatten([styles.ActionButtion, {flex:1}])} onPress={this.handleAnswerClick.bind(this, this.ANSWER_TYPE_YES)}>
                      <Text style={StyleSheet.flatten([styles.answerText, {color:colors[this.props.qType][0]}])}>Oui</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={StyleSheet.flatten([styles.ActionButtion, {flex:1, marginLeft: 15*em}])} onPress={this.handleAnswerClick.bind(this, this.ANSWER_TYPE_NO)}>
                      <Text style={StyleSheet.flatten([styles.answerText, {color:colors[this.props.qType][0]}])}>Non</Text>
                    </TouchableOpacity>
                </View>

                <View styles={{backgroundColor:"#fff"}}>
                  <TouchableOpacity style={styles.ActionButtionNoShadow} onPress={this.handleAnswerClick.bind(this, this.ANSWER_TYPE_DUNNO)}>
                    <Text style={styles.dunnoText}>Je ne sais pas</Text>
                  </TouchableOpacity>

                </View>

                { info &&
                <TouchableOpacity style={styles.infoWrapper} onPress={this.handleGoInfoWindow.bind(this)}>
                  <Info width={12*em} height={12*em} color={colors[this.props.qType][0]}/>
                  <Text style={StyleSheet.flatten([styles.infoText, {color:colors[this.props.qType][0]}])}> +info</Text>
                </TouchableOpacity>
                }
              </View>

            </View>

          </View>
        </View>

        {this.renderInfoModal()}

        {this.renderEvaluationModal()}

        {this.renderAdvertisements()}
        <ReactInterval timeout={5000} enabled={true}
          callback={() => this.setAdvertisements()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f6f5fa',
    flexDirection: 'column',
  },

  headerContainer: {
    flex: 1
  },

  contentContainer: {
    flex:1,
    marginTop: -120*em,
    flexDirection: "column"
  },

  contentWrapper:{
    flex: 1,
    flexDirection:"column",
    marginTop:-80*em
  },

  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  ButtonWrapper: {
    overflow: 'hidden',
    borderRadius: 15*em,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width:40*em,
    height: 40*em,
    justifyContent: 'center',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 15,
    position:"absolute",
    left: WIDTH * 48 / 750,
    top: WIDTH * 0.4 * 50 / 300
  },

  ActionButtion: {
    overflow: 'hidden',
    borderRadius: 15*em,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 50*em,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 60,
  },

  ActionButtionNoShadow: {
    overflow: 'hidden',
    borderRadius: 15*em,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 50*em,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 1,
    marginLeft:20*em,
    marginRight:20*em,
    zIndex:-1
  },

  infoWrapper:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 12*em
  },

  infoText:{
    fontSize: 12*em,
    fontFamily: "OpenSans-Regular",
  },

  dunnoText:{
    color:"#908ea6",
    fontSize: 14*em,
    fontFamily: "OpenSans-SemiBold"
  },

  answerWrapper:{
    paddingLeft: 20*em,
    paddingRight:20*em,
    paddingBottom: 20*em,
    paddingTop: 15*em,
    flexDirection:"row",
    zIndex:-1
  },

  answerText:{
    fontSize: 14*em,
    fontFamily:"OpenSans-SemiBold"
  },

  progressWrapper:{
    width: WIDTH,
    height: 20*em,
    backgroundColor:"#e1e0e5"
  },

  questionText:{
    paddingLeft: 50*em,
    paddingRight: 50*em,
    fontSize: 18*em,
    color:"#251b4d",
    textAlign: "center",
    fontFamily: "Merriweather-Black",
    paddingTop:20*em
  },
  advertisementImge: {
    width: '100%', //370,
    height: 50
  }
});

const mapStateToProps = state => ({
  app: state.app || {},
  auth: state.auth || {},
  question: state.question || {}
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch),
  questionActions: bindActionCreators(QuestionActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questionnaire);

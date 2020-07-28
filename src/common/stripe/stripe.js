import stripe from 'tipsi-stripe';
import stripeConfig from '../config/stripe';
import { getSettingsInfo } from '../firebase/database';

export async function initStripe() {
  try {
    console.log('==== initStripe...');
    const response = await getSettingsInfo();
    console.log('====== initStripe: response: ', response);
    if (response) {
      const stripeSettings = response['stripe'];
      console.log('====== stripe settings: ', stripeSettings);
      if (stripeSettings) {
        const mode = stripeSettings['mode'];
        const publishableKey = (mode === "test") ? stripeSettings['testKey'] : stripeSettings['publishKey'];
        console.log('====== stripe publishableKey: ', publishableKey);
        stripe.setOptions({
          publishableKey: publishableKey || stripeConfig.publishableKey,
        });
      }
    }
  } catch (error) {
    console.log('==== initStripe error: ', error);
  }
}

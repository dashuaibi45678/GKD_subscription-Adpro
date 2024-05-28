import { checkDeprecatedGroupKeys } from '../src/checkDeprecatedGroupKeys';
import subscription from '../src/subscription';
import { checkSubscription } from '@gkd-kit/tools';

checkSubscription(subscription);

checkDeprecatedGroupKeys(subscription.apps!);

export default subscription;

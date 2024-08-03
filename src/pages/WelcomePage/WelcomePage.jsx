import { WelcomeNav } from 'components/WelcomePageComponents/WelcomeNav';
import { WelcomeHero } from 'components/WelcomePageComponents/WelcomeHero';
import { WelcomeFeatures } from 'components/WelcomePageComponents/WelcomeFeatures';
import { WelcomeAdv } from 'components/WelcomePageComponents/WelcomeAdv';
import { WelcomeFeedback } from 'components/WelcomePageComponents/WelcomeFeedback';
import { WelcomeFooter } from 'components/WelcomePageComponents/WelcomeFooter';


const WelcomePage = () => {
  return (
    <div>
      <WelcomeNav/>
      <WelcomeHero/>
      <WelcomeFeatures/>
      <WelcomeAdv/>
      <WelcomeFeedback/>
      <WelcomeFooter/>
    </div>

  );
};

export default WelcomePage;

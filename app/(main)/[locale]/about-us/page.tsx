import AboutSectionOne from "../../[locale]/components/About/AboutSectionOne";
import AboutSectionTwo from "../../[locale]/components/About/AboutSectionTwo";
import Breadcrumb from "../../[locale]/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

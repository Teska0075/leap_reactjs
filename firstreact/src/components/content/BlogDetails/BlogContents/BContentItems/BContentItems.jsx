import CardItems from "../../../CardSection/CardCom/card/CardSections/CardItems/CardItems";
import "./BContentItems.css";
import ContentItem1 from "./ContentItem/ContentItem1/ContentItem1";

const ContentItems = [
  {
    titleName: "BLOG DETAILS H1",
    titleClass: "BlogTitle1",
    paraText:
      "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It's a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills. Additionally, many UX design belongs expose you to case studies detailing an app or web's successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design belongs expose you to case studies detailing an app or web's successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
    paraClass: "BlogContext",
  },
  {
    titleName: "BLOG DETAILS H2",
    titleClass: "BlogTitle2",
    paraText:
      "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It's a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills. Additionally, many UX design belongs expose you to case studies detailing an app or web's successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design belongs expose you to case studies detailing an app or web's successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
    paraClass: "BlogContext",
  },
  {
    titleName: "BLOG DETAILS H3",
    titleClass: "BlogTitle2",
    paraText:
      "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It's a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills. Additionally, many UX design belongs expose you to case studies detailing an app or web's successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design belongs expose you to case studies detailing an app or web's successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
    paraClass: "BlogContext",
  },
];

const BContentItems = () => {
  return (
    <div className="ContentItem1">
      {ContentItems.map((item) => {
        return (
          <ContentItem1
            titleClass={item.titleClass}
            title={item.titleName}
            paraClass={item.paraClass}
            para={item.paraText}
          />
        );
      })}
    </div>
  );
};

export default BContentItems;

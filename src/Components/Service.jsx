import Card from "./Card";
import Frontend from "./../assets/frontend.jpg"
import Backend from "./../assets/backend.jpg"
import UIUX from "./../assets/UIUX.jpg"
import Database from "./../assets/database.jpg"
import Deploy from "./../assets/deployment.jpg"

function Service() {
  return (
    <div id="Services" className="px-1 py-3 my-5 max-w-7xl m-auto">
      <h1 className="text-4xl mb-10 text-center  font-bold">My Services</h1>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-5 justify-items-center px-5">
        <Card
          title="UI/UX Design"
          description="I create Mobile-first responsive and modern stylish looks web ui/ux that deliver a smooth user experience."
          image={UIUX}
        />
        <Card
          title="Frontend Development"
          description="I create fast, Mobile-first, responsive,and optimized performance that deliver a smooth user experience."
          image={Frontend}
        />
        <Card
          title="Backend & API Developmentt"
          description="I design secure and well-structured backend systems that power modern web applications."
          image={Backend}
        />
        <Card
          title="Database Design & Management"
          description="I design efficient databases that ensure fast data access and long-term scalability. Schema design and validation, Query optimization and indexing"
          image={Database}
        />
        <Card
          title="Deployment & Development Workflow"
          description="I follow professional workflows to deliver production-ready applications."
          image={Deploy}
        />
      </div>
    </div>
  );
}

export default Service;

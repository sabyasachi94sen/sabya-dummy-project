import { Button } from "@mui/base";
import ProfileDescription from "./ProfileDescription";
import ContentDisplay from "./ContentDisplay";

function ProfileView() {
  return (
    <div className="section background-image--2">
      <div className="sales-engineer-card">
        <div className="sales-engineer-section">
          <div className="sales-engineer-description-container">
            <div className="sales-engineer-section1">
              <ProfileDescription />
              {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
              <Button className="sales-engineer-button-style">Meet Your AI Sales Engineer</Button>
            </div>
          </div>
          {/* <ContentDisplay /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileView;

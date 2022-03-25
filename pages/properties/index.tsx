import Button from "components/atoms/Button/Button";
import Icon from "components/atoms/Icon/Icon";
import Tab from "components/organisms/tabs";
import Authlayout from "components/templates/Authlayout";
import { Container } from "components/templates/container";
import * as DataUtils from 'utils/data'
import { Flex } from "./styles";

const Property = () => {
  return (
    <Authlayout>
      <Container>
        <div className="d-flex justify-content-between mt-4">
          <div className="d-flex gap-3 align-items-center">
            <div className="text-muted">
              <Icon size={25} name="bi-house-door" />
            </div>
            <p className="h4 mt-2 text-muted">Your Properties</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex gap-1">
              <Button
                buttonStyle={{ minHeight: "3pc" }}
                backgroundColor="var(--bs-soft-primary)"
              >
                <Icon name="bi-columns-gap" />
              </Button>
              <Button
                buttonStyle={{ minHeight: "3pc" }}
                backgroundColor="var(--bs-soft-primary)"
              >
                <Icon name="bi-list-task" />
              </Button>
            </div>
            <Button
              buttonStyle={{ minHeight: "3pc" }}
              backgroundColor="var(--bs-soft-primary)"
            >
              Add new Property
            </Button>
          </div>
        </div>

        {/* tab section */}
        <div className="mt-4">
          <Tab>
            {
              DataUtils.DashboardTabItems.map((item)=>(
                <Tab.Li>
                <Tab.Link border={item.active}>{item.title}</Tab.Link>
              </Tab.Li>
              ))
            }
          </Tab>
        </div>
        
        {/* tab section ends */}
      </Container>
    </Authlayout>
  );
};

export default Property;

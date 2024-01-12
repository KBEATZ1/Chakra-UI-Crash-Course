import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email:nkay@gmail.com
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={ChatIcon} />
              This is the chat room
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={StarIcon} />
              This a trial version
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              This is the chat room
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              This a trial version
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              This a trial version
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              This a trial version
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

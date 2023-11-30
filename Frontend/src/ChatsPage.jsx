import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
        <PrettyChatWindow
            projectId="82804fee-ab84-4291-a0e1-aabb04324297"
            username={props.user.username}
            secret={props.user.secret}
            style={{height:"100%"}}
        />
    </div>
  );
};
export default ChatsPage;

import Status from "./status";

function Profile(props) {
  return (
    <div>
      Profile
      <Status set={props.set} />
    </div>
  );
}
export default Profile;

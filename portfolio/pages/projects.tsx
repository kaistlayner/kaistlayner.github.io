import {
  memorableLectures,
  lastSemesterLectures,
  militaryServiceContents,
} from "../constant";
import ListItems from "../component/atoms/ListItems";

export default function Projects() {
  return (
    <ListItems
      title="프로젝트"
      contents={[
        ...militaryServiceContents,
        ...memorableLectures,
        ...lastSemesterLectures,
      ]}
    />
  );
}

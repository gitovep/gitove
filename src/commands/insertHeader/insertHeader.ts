import { DEFAULT_CONFIG } from '../../config/defaultConfig';

// 설정 파일에서 type에 해당하는 code로 변환하기
const convertCommitType = (type: string | undefined): string | undefined => {
  return DEFAULT_CONFIG.type.find((t) => t.alias === type)?.name;
};

// 설정 파일에서 scope에 해당하는 code로 변환하기
const convertCommitScope = (scope: string | undefined): string | undefined => {
  return DEFAULT_CONFIG.scope.find((s) => s.alias === scope)?.name;
};

const insertHeader = (commitMessage: CommitMessage): string => {
  // type 변환
  const convertedType = convertCommitType(commitMessage.type);
  // scope 변환
  const convertedScope = convertCommitScope(commitMessage.scope);

  const type = convertedType ? `[${convertedType}]` : '';
  const scope = convertedScope ? `[${convertedScope}]` : '';
  const { title } = commitMessage;

  // 변환 된 헤더를 타이틀에 합친 후 타이틀 리턴
  // 예시 : [type][scope]title
  return type + scope + title;
};

export { insertHeader };
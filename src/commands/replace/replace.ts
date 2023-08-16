import { DEFAULT_CONFIG } from "src/config/defaultConfig";

// 유저가 작성한 커밋메시지(바디)에서 {alias}의 alias 추출하기
const extractAliasFromKeyword = (commitBody: string): string[] => {
  // 정규식 정의 - {}
  const pattern = /\{([^}]+)\}/g;
  // commitMessage에 {}이 없는 경우에는 빈배열
  const matchesPattern = commitBody.match(pattern) || []; 

  /** {alias}
   * match[0]: '{'
   * match[1]: 'alias'
   * match[2]: '}'
   */
  const extractedAlias = matchesPattern.map((match) => match[1]);
  return extractedAlias;
};


// config에서 사전에 추출한 alias와 매칭되는 name 찾기
const searchAliasFromConfig = (extractedAlias: string[]): string[] => {
  let matchedName: string[] = [];

  DEFAULT_CONFIG.replace.forEach((config) => {
    extractedAlias.forEach((alias) => {
      // extractedAlias의 문자가 포함된 모든 alias의 name을 리턴하므로 조건 추가
      if (config.alias.includes(alias) && !config.name.includes(':')) {
        matchedName.push(config.name);
      }
    });
  });

  return matchedName;
};

// 매칭된 name을 커밋메시지에 적용
export const replaceAliasToName = (commitMessage: CommitMessage): string => {
  const extractedAlias = extractAliasFromKeyword(commitMessage.body!);
  const searchedNames = searchAliasFromConfig(extractedAlias);

  // 대치하기 위해 바디 복사
  let replacedBody = commitMessage.body!;
  searchedNames.forEach((searchedName, idx) => {
    const alias = extractedAlias[idx];
    replacedBody = replacedBody.replace(`{${alias}}`, searchedName);
  });

  return replacedBody;
};
// import { DEFAULT_CONFIG } from "src/constants/replaceExamples";

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


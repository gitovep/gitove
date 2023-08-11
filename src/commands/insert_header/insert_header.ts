import fs from 'fs';
import { Emoji, CommitMessage } from './types';

// 설정 파일에서 type에 해당하는 code로 변환하기
const convertCommitHeader = async (type: string | undefined): Promise<Emoji | undefined> => {
  // 설정 파일 읽기 (json 파일이라 가정)
  const data: string = await fs.promises.readFile('configExample.json', 'utf8');
  const emojis: Emoji[] = JSON.parse(data).map((emoji: Emoji) => emoji);

  return emojis.find((emoji) => emoji.name === type);
};

const insertHeader = (commitMessage: CommitMessage): string => {
  // type 변환
  const convertedType = convertCommitHeader(commitMessage.type);
  // scope 변환
  const convertedScope = convertCommitHeader(commitMessage.scope);

  const type = convertedType ? `[${convertedType}]` : '';
  const scope = convertedScope ? `[${convertedScope}]` : '';
  const { title } = commitMessage;

  // 변환 된 헤더를 타이틀에 합친 후 타이틀 리턴
  // 예시 : [type][scope]title
  return type + scope + title;
};

export { insertHeader };

import fs from 'fs';
import { Emoji, CommitMessage } from './types';

// 설정 파일에서 type에 해당하는 code로 변환하기
const convertCommitType = async (type: string | undefined): Promise<Emoji | undefined> => {
  // 설정 파일 읽기 (json 파일이라 가정)
  const data: string = await fs.promises.readFile('configExample.json', 'utf8');
  const emojis: Emoji[] = JSON.parse(data).map((emoji: Emoji) => emoji);

  return emojis.find((emoji) => emoji.name === type);
};

const insertHeader = (commitMessage: CommitMessage): string => {
  // type 변환
  const convertTypeResult = convertCommitType(commitMessage.type);
  const type = convertTypeResult ? `[${convertTypeResult}]` : '';
  const scope = commitMessage.scope ? `[${commitMessage.scope}]` : '';
  const { title } = commitMessage;
  const body = commitMessage.body ? `\n\n${commitMessage.body}` : '';
  // 변환 후 커밋 메시지 합치기
  // 예시 : [type][scope]title (한줄 공백) body
  return type + scope + title + body;
};

export { insertHeader };

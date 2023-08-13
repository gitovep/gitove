// import { DEFAULT_CONFIG } from "./../../config/defaultConfig";

const isReplaceable = async (commitBody: string = ''): Promise<string[] | string | undefined> => {
    // commitBody의 기본값을 빈 문자열('')로 설정하여, 
    // 만약 함수에 undefined가 넘어온다면 자동으로 빈 문자열로 초기화
    // 이렇게 하면 commitBody는 무조건 문자열 타입이 됨

    const pattern = /\{([^}]+)\}/g; // 모든 {} 패턴 안의 keyword를 추출하는 정규 표현식
    const matchKeywords = []
    let match

    while ((match = pattern.exec(commitBody)) !== null) {
        matchKeywords.push(match[1]);
      }

    // {keyword}가 있으면 배열에 keyword 반환, 없으면 빈배열 반환
    return matchKeywords 
}

// 등록한 예약어
// 해당 앨리어스의 name 리턴

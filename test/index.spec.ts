import { DEFAULT_CONFIG } from 'src/config/defaultConfig';

// Temporary test to check alias path working
it('should pass', () => {
  const M: CommitMessage = {
    type: 'feat',
    scope: 'test',
    title: 'test',
    body: 'test',
  };
  console.log(M);
  expect(DEFAULT_CONFIG).toBeDefined();
});

import { CustomPipeWithSingleArgPipe } from './custom-pipe-with-single-arg.pipe';

describe('CustomPipeWithSingleArgPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipeWithSingleArgPipe();
    expect(pipe).toBeTruthy();
  });
});

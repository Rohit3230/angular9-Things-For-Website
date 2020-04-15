import { CustomPipeWithNumOfArgumentsPipe } from './custom-pipe-with-num-of-arguments.pipe';

describe('CustomPipeWithNumOfArgumentsPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipeWithNumOfArgumentsPipe();
    expect(pipe).toBeTruthy();
  });
});

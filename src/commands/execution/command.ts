import execa from 'execa';

const executeCommand = async (file: string, ...commands: string[])
: Promise<execa.ExecaReturnValue<string>> => execa(file, commands);

export default executeCommand;

{
  let union: boolean | number; // could be either type
  union = 5;
  union = true;
  // union = 'string'; // error

  type MyType = string | Error;
  const wibble: MyType = 'ok';

  const fn = (): string => {
    throw new Error('error');
    return 'ok';
  }
}

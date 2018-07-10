export const isEmailFormat = str => (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).test(str);

export const generateInvoices = (count) => {
  let path = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < count; i++) {
      result += path[Math.floor(Math.random() * path.length)];
  }
  return result;
}
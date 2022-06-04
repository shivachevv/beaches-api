const createTimeStamp = (): string => {
  const now = new Date();
  const month =
    now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
  const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
  const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  const mins =
    now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  const secs =
    now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

  const date = now.getFullYear() + '-' + month + '-' + day;
  const time = hours + ':' + mins + ':' + secs;
  return date + ' ' + time;
};

export default createTimeStamp;

const JDClient = require('../index');

async function test() {
  const client = new JDClient({
    appKey: '',
    secretKey: ''
  });
  let res = await client.execute('jd.union.open.order.query', {
    orderReq: {
      pageNo: 1,
      pageSize: 20,
      type: 1,
      time: '20200217160303'
    }
  });
  console.log(res);
}

test();
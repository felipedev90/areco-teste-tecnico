import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  stages: [
    { duration: '10s', target: 20 },
    { duration: '20s', target: 50 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'],
    http_req_failed: ['rate<0.01'],
  },
}

const URL = 'https://areco-teste-tecnico.vercel.app/'

export default function () {
  const res = http.get(URL)

  check(res, {
    'status é 200': (r) => r.status === 200,
    'contém o h1 esperado': (r) => r.body.includes('índice que impede o pedido errado'),
  })

  sleep(1)
}

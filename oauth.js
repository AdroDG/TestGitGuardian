const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('POST /applications/{client_id}/token/scoped', {
  client_id: 'Iv1.8a61f9b3a7aba766',
  access_token: 'e72e16c7e42f292c6912e7710c838347ae178b4a',
  target: 'octocat',
  permissions: {
    metadata: 'read',
    issues: 'write',
    contents: 'read'
  }
})
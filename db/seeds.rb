Doorkeeper::Application.create!(
    name: 'Store API',
    redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: 'read write'
)

Doorkeeper::Application.create!(
    name: 'Store Front',
    redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: 'read write'
)
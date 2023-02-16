Doorkeeper::Application.create!(
    name: 'Store API',
    redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: 'read write'
)
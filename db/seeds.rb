Doorkeeper::Application.create!(
    name: 'Rails API Boilerplate',
    redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: 'read write'
)
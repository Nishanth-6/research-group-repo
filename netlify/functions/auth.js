// OAuth authentication endpoint for Sveltia CMS
const axios = require('axios');

const CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;

exports.handler = async (event) => {
  const { code } = event.queryStringParameters || {};

  if (!code) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing code parameter' })
    };
  }

  try {
    // Exchange code for access token
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code
      },
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );

    const { access_token, token_type } = response.data;

    // Return token in the format expected by Sveltia CMS
    return {
      statusCode: 200,
      body: JSON.stringify({
        token: access_token,
        provider: 'github'
      })
    };
  } catch (error) {
    console.error('OAuth error:', error.response?.data || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Authentication failed',
        details: error.response?.data || error.message
      })
    };
  }
};

import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { indexHtmlTemplate } from './indexHtmlTemplate';
import { App } from '../App';
import axios from 'axios';

const app = express();

// По URL '/static' будут доступны все файлы, которые лежат в папке 'dist/client'
app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password: 'V8i-AW5b7HL4Hyl8-0K33g34xIvkaQ' },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  )
    .then(({ data }) => {
      res.send(
        indexHtmlTemplate(ReactDOM.renderToString(<App />), data['access_token'])
      );
    })
    .catch(console.log);
})

app.get('*', (req, res) => {
  res.send(
    indexHtmlTemplate(ReactDOM.renderToString(<App />))
  );
})

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
})

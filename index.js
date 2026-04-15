import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Health checks (used by App Gateway)
app.get('/healthz', (req, res) => {
  res.status(200).send('ok');
});

app.get('/ready', (req, res) => {
  res.status(200).send('ok');
});

// App A
app.get('/app-a', (req, res) => {
  res.send('Hello from APP-A (AKS1)');
});

app.get('/app-a/*', (req, res) => {
  res.send('Hello from APP-A (AKS1)');
});

// App B
app.get('/app-b', (req, res) => {
  res.send('Hello from APP-B (AKS1)');
});

app.get('/app-b/*', (req, res) => {
  res.send('Hello from APP-B (AKS1)');
});


// App A
app.get('/app-c', (req, res) => {
  res.send('Hello from APP-C (AKS2)');
});

app.get('/app-c/*', (req, res) => {
  res.send('Hello from APP-C (AKS2)');
});

// App B
app.get('/app-d', (req, res) => {
  res.send('Hello from APP-D (AKS2)');
});

app.get('/app-d/*', (req, res) => {
  res.send('Hello from APP-D (AKS2)');
});


// Optional root
app.get('/', (req, res) => {
  res.send('Root endpoint from actions');
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});

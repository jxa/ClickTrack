var Express = require("express"),
    app     = Express.createServer();

app.configure(function(){
  app.use(Express.staticProvider(__dirname + '/public'));
});

app.register('.haml', require('hamljs'));

// ## MODELS
// class Chart
//   include DataMapper::Resource  
//   property :id,           Serial
//   property :points,       Text
//   property :created_at,   DateTime
// end

app.get('/', function(req, res){
  res.render('index.haml', {layout: false});
});

app.get('/charts', function(req, res){
  res.render('list.haml', {
    layout: false,
    locals: {
      chartcount: 1,
      charts: [{id: "123", created_at: "yesterday"}]
    }
  });
});

// get '/chart/:id' do
//   @chart = Chart.get(params[:id])
//   haml :show
// end

// post '/chart/new' do
//  chart = Chart.create(:points=>params[:points],:created_at=>Time.now)
//  if chart.save
//    status 201
//  else
//    status 412
//  end
// end

// post '/chart/destroy/:id' do
//   @chart = Chart.get(params[:id])
//   @chart.destroy
//   if @chart.destroy
//     status 201
//   else
//     status 412
//   end
// end

app.listen(3030);

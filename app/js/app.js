/** compontent */
var Header = React.createClass({
	render:function(){
		return <header>{this.props.name}</header>
	}
});

var HelloContent = React.createClass({
	getInitialState: function () {
	    return {
	      username: 'jay',
	      lastGistUrl: 'www'
	    };
  	},
	// componentDidMount: function () {
	// 	$.get(this.props.source, function(result) {
	// 		console.log(result);
	// 	  var lastGist = result[0];
	// 	  if (this.isMounted()) {
	// 	    this.setState({
	// 	      username: lastGist.owner.login,
	// 	      lastGistUrl: lastGist.html_url
	// 	    });
	// 	  }
	// 	}.bind(this));
	// },
	render:function(){
		return <div className=''>
			{this.state.username} - 
			{this.state.lastGistUrl}
		</div>;
	}
});

var Footer = React.createClass({
	render:function(){
		return <header>
			<div className='col-xs-4 text-center'>
				<span className="glyphicon glyphicon-book">
					<div>Book</div>
				</span>
			</div>
			<div className='col-xs-4 text-center'>
				<span className="glyphicon glyphicon-film">
					<div>Movic</div>
				</span>
			</div>
			<div className='col-xs-4 text-center'>
				<span className="glyphicon glyphicon-music">
					<div>Music</div>
				</span>
			</div>
		</header>;
	}
});


/** render */
ReactDOM.render(
	<Header name='Tab'/>,
	document.getElementById('header')
);


ReactDOM.render(
	<Footer/>,
	document.getElementById('footer')
);


var url = 'https://api.douban.com/v2/book/search?callback=callback&count=10&q=react'
$.ajax({
	url:url,
	dataType:'jsonp',
});
window.callback = function(data){
	console.log(data);
	var books = data.books;
	console.log(books);
	ReactDOM.render(
		<ul className="book-ul">
		{
			books.map(function(obj){
				return <li className='book-li'>
							<img src={obj.image} className='img'/>
							<span>Price: {obj.price}</span>
						</li>;
			})
		}
		</ul>,
    	document.getElementById('content')
	);


}
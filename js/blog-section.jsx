const blogData = {
	data: [
		{
			blogTitle: 'Why MiniConf',
			blogContent: 'wkjfbnewjkew aewjklfawbjwab swjkweuiewjew dfbjkajsdajnf',
			author: 'Tanay Pratap',
		},
		{
			blogTitle: 'Why Performance',
			blogContent: 'sdjklndsjknds dsdsiwekewew dsndsnds',
			author: 'Saurabh Rajpal',
		},
	],
};

class BlogSection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<BlogCard data={blogData.data[0]} />
				<BlogCard data={blogData.data[1]} />
			</div>
		);
	}
}

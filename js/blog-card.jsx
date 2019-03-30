class BlogCard extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<div>
				<h2>{data.blogTitle}</h2>
				<h3>{data.author}</h3>
				<div>{data.blogContent}</div>

				<LikeButton />
			</div>
		);
	}
}

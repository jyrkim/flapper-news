class CommentsController < ApplicationController

  def create
        logger.info "Comments create action entered... " + params[:body]


    post = Post.find(params[:post_id])

    comment = post.comments.create(comment_params)
    #comment = post.comments.new(comment_params)

    #comment.post = post

    #comment.save

    respond_with post, comment
  end

  def upvote
    post = Post.find(params[:post_id])
    comment = post.comments.find(params[:id])
    comment.increment!(:upvotes)

    respond_with post, comment
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end

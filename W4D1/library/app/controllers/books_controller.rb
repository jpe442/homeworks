class BooksController < ApplicationController
  # Our books' index view is expecting there to be a @books variable 
  # that contains all the books from the database, but it's currently nil. 
  # This is a job for our controller's index action! Get your index working so 
  # that @books is correctly set to all books and we can see our library's index page.


  def index
    # your code here
    @books = Book.all
  end

  def new
    # your code here
    render :new

  end

  def create
    # your code here
    book = Book.new(book_params)
    if book.save
      redirect_to books_url
    else
      flash.now[:errors] = book.errors.full_messages
      render :new
    end
  end

  def destroy
    # your code here
    book = Book.find(params[:id])

    book.destroy
    redirect_to books_url

  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end

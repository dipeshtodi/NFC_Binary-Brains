@app.route("/logout")
def logout():
    logout_user()
    return redirect('/')

@app.route("/blogpost",method=['GET','POST'])
def blogpost():
    if request.method=='POST':
        title=request.form.get('title')
        author=request.form.get('author')
        content=request.form.get('content')
        blog=request.form.get('title')

    return render_template('index.html')


    
    

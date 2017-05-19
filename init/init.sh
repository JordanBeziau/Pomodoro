name=
while [ -z $name ]
do 
    echo "(+_+) Project name ? "
    read name
done

mv node-boilerplate $name
cd $name
rm -rf .git
git init .
git add .
git commit -m "Initial commit"
npm install
npm start
# remove react dist
rm -rf node_modules/@nithview/react/dist

# copy @nithview/react dist
cp -a ../react/dist node_modules/@nithview/react/dist
cp -a ../react/package.json node_modules/@nithview/react/package.json
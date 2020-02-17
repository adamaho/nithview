# copy @nithview/react dist
rm -rf node_modules/@nithview/react/dist
cp -a ../react/dist node_modules/@nithview/react/dist
cp -a ../react/package.json node_modules/@nithview/react/package.json

# Copy core dist
rm -rf node_modules/@nithview/core/dist
rm -rf node_modules/@nithview/core/loader
cp -a ../core/dist node_modules/@nithview/core/dist
cp -a ../core/loader node_modules/@nithview/core/loader
cp -a ../core/package.json node_modules/@nithview/core/package.json
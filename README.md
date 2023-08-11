# Batch Image Processor

Takes images from `/input` and saves them into `/output` with settings you set in `index.js`

0. Run `npm install`
1. Create folder `input` and put all your images there (subfolders ok)
2. Create folder `output`
3. Update first few lines of `index.js` file (optional)
4. Run `npm start`

_Note:_ To process `.heic` image files you may need `libvips` to be [installed first](https://www.libvips.org/install.html)

## Thank you

- [sharp](https://github.com/lovell/sharp) - _Node_ image processing module
- [fdir](https://github.com/thecodrr/fdir) - fastest way to get a list of files in a directory

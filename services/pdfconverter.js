const PDFDocument = require('pdfkit');
const path = require('path');
const crs = require('crypto-random-string');
const sharp = require('sharp');

// Import util funs
const { uploadImg, deleteOldFiles } = require('../util/filehandler');

// Create the path which will be used
const baseTempPath = path.join(__dirname, '../store/tmp/');

const convertPdfService = async (req, res) => {
	const { convertFrom } = req.query;
	const id = crs({ length: 10 });
	let pathFrom = `${baseTempPath}${id}.${convertFrom}`;

	try {
		// Upload the img
		pathFrom = await uploadImg(req, `${pathFrom}.${convertFrom}`);

		// Start img processing, load relevant metadata and img itself
		const { width, height } = await sharp(pathFrom).metadata();

		// As soon as data are loaded, create the pdf
		let doc = new PDFDocument({ size: [width, height] });
		doc.image(pathFrom, 0, 0, {
			fit: [width, height],
		});

		// Round up the document, pipe doc to client and clean up
		// Then pipe the response to the client
		doc.end();
		doc.pipe(res);
	} catch (e) {
		log.push(e.message);
		res.status(500).send({ msg: 'Something went wrong', error: e.message });
	} finally {
		deleteOldFiles(pathFrom);
	}
};

module.exports = { convertPdfService };

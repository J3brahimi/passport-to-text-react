import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Tesseract from "tesseract.js";

// REGEX
const passportNoRegex = /Passport No: (\w+)/;
const surnameRegex = /sumame: ([^,]+)/;
const nameRegex = /Name . ([^,]+)/;
const fathersNameRegex = /Father's Name : (\w+)/;
const dobRegex = /Date & Place of Birth - (\d{2}\/\d{2}\/\d{4}) = (\w+)/;
const issueDateRegex = /Date of Issue: (\d{2}\/\d{2}\/\d{4})/;
const expiryDateRegex = /Date of Expiry: (\d{2}\/\d{2}\/\d{4})/;

const Uploader = () => {
  const [text, setText] = useState("");
  const [progressInPercent, setProgressInPercent] = useState(0);

  const logger = info => {
    const progress = info.progress; // 0 - 1
    setProgressInPercent(Number(progress) * 100);
  };

  const getImageInfo = image => {
    Tesseract.recognize(image, "eng", { logger }).then(({ data }) => {
      setText(data.text);
    });
  };

  // generate info based on text in images
  const [passportInfo, setPassportInfo] = useState({});
  const removeTextAfterSpace = selectedText => {
    return selectedText.split(" ")[0];
  };
  useEffect(() => {
    if (!text) return;

    const passportNo = removeTextAfterSpace(
      text?.match(passportNoRegex)?.[1] || "-",
    );
    const surname = removeTextAfterSpace(text?.match(surnameRegex)?.[1] || "-");
    const name = removeTextAfterSpace(text?.match(nameRegex)?.[1] || "-");
    const fathersName = removeTextAfterSpace(
      text?.match(fathersNameRegex)?.[1] || "-",
    );
    const birthInfo = text.match(dobRegex);
    const birthDate = removeTextAfterSpace(birthInfo?.[1] || "-");
    const birthPlace = removeTextAfterSpace(birthInfo?.[2] || "-");
    const issueDate = removeTextAfterSpace(
      text?.match(issueDateRegex)?.[1] || "-",
    );
    const expiryDate = removeTextAfterSpace(
      text?.match(expiryDateRegex)?.[1] || "-",
    );

    setPassportInfo({
      passportNo,
      surname,
      name,
      fathersName,
      birthDate,
      birthPlace,
      issueDate,
      expiryDate,
    });
  }, [text]);

  // image input
  const [imageFile, setImageFile] = useState("");

  const handleSelectImage = e => {
    const file = e.target.files[0];
    if (!file) return;

    const image = URL.createObjectURL(file);

    setImageFile(image);
    getImageInfo(image);
  };

  return (
    <Box>
      <input
        type="file"
        id="img"
        name="img"
        accept="image/*"
        className="w-100"
        onChange={handleSelectImage}
      />
      {imageFile && (
        <img
          style={{ display: "block" }}
          src={imageFile}
          width="300"
          alt="passport preview"
        />
      )}

      <p>Progress: %{progressInPercent.toFixed()}</p>
      <Typography component="h3">Info:</Typography>
      <Box display="flex" gap="8px">
        <Typography component="span">Passport No: </Typography>
        <Typography component="strong">{passportInfo.passportNo}</Typography>
      </Box>
      <Box display="flex" gap="8px">
        <Typography component="span">Surname: </Typography>
        <Typography component="strong">{passportInfo.surname}</Typography>
      </Box>
      <Box display="flex" gap="8px">
        <Typography component="span">Name: </Typography>
        <Typography component="strong">{passportInfo.name}</Typography>
      </Box>
      <Box display="flex" gap="8px">
        <Typography component="span">Father name: </Typography>
        <Typography component="strong">{passportInfo.fathersName}</Typography>
      </Box>

      <Box display="flex" gap="8px">
        <Typography component="span">Birth date: </Typography>
        <Typography component="strong">{passportInfo.birthDate}</Typography>
      </Box>
      <Box display="flex" gap="8px">
        <Typography component="span">Birth place: </Typography>
        <Typography component="strong">{passportInfo.birthPlace}</Typography>
      </Box>
      <Box display="flex" gap="8px">
        <Typography component="span">Issue date: </Typography>
        <Typography component="strong">{passportInfo.issueDate}</Typography>
      </Box>
      <Box display="flex" gap="8px">
        <Typography component="span">Expiry date: </Typography>
        <Typography component="storage">{passportInfo.expiryDate}</Typography>
      </Box>
    </Box>
  );
};

export default Uploader;

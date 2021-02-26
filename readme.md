# Params

| Name             | Type    | Value(s)              | Desc                                                                                                     |
| ---------------- | ------- | --------------------- | -------------------------------------------------------------------------------------------------------- |
| convertFrom      | String  | jpg, png, webp        | The filetype to convert from                                                                             |
| convertTo        | String  | jpg, png, webp        | The filetype to convert to                                                                               |
| qualityTo        | Integer | [1, 100]              | The quality of the final img ( less quality = less filesize)                                             |
| heightTo         | Integer | 0 - max               | The height of the final img                                                                              |
| widthTo          | Integer | 0 - max               | The width of the final img                                                                               |
| fixedAspectRatio | String  | hd / classic / square | Use a predefined aspect ratio (considered AFTER resizing)                                                |
| keepAspectRatio  | Boolean | true / false          | Keep the aspect ratio of the input ( considers if img has been resized before)                           |
| imgFit           | Boolean | true / false          | Define if img is cut or not (if set to true, will add a 'background' to the non-cropped part of the img) |

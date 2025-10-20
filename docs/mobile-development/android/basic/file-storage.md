# 文件存储

## Context 方法

### `getFilesDir(): File`

returns a handle to the directory for private application files

### `openFileInput(name: String): FileInputStream`

opens an existing file in the files directory for input

### `openFileOutput(name: String, mode: Int):FileOutputStream`

opens a file in the files directory for output, possibly creating it

### `getDir(name: String, mode: Int): File`

gets (and possibly creates) a subdirectory within the files directory

### `fileList(…): Array<String>`

gets a list of filenames in the main files directory, such as for use with `openFileInput(String)`

### `getCacheDir(): File`

returns a handle to a directory you can use specifically for storing cache files; you should take care to keep this directory tidy and use as little space as possible



```kotlin
//PictureUtils.kt

fun getScaledBitmap(path: String, destWidth: Int, destHeight: Int): Bitmap {
	// Read in the dimensions of the image on disk
	var options = BitmapFactory.Options()
	options.inJustDecodeBounds = true
	BitmapFactory.decodeFile(path, options)
	val srcWidth = options.outWidth.toFloat()
	val srcHeight = options.outHeight.toFloat()
	// Figure out how much to scale down by
	var inSampleSize = 1
	if (srcHeight > destHeight || srcWidth > destWidth) {
		val heightScale = srcHeight / destHeight
		val widthScale = srcWidth / destWidth
		val sampleScale = if (heightScale > widthScale) {
			heightScale
		} else {
			widthScale
		}
		inSampleSize = Math.round(sampleScale)
	}
	options = BitmapFactory.Options()
	options.inSampleSize = inSampleSize
	// Read in and create final bitmap
	return BitmapFactory.decodeFile(path, options)
}

fun getScaledBitmap(path: String, activity: Activity): Bitmap {
	val size = Point()
	activity.windowManager.defaultDisplay.getSize(size)
	return getScaledBitmap(path, size.x, size.y)
}
```
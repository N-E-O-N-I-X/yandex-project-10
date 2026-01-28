import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import { useState } from 'react';
import styles from './ArticleParamsForm.module.scss';
import {
	fontFamilyOptions,
	OptionType,
	defaultArticleState,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';

type TFormValue = {
	fontFamily: OptionType;
	fontColor: OptionType;
	fontSize: OptionType;
	bgColor: OptionType;
	contentWidth: OptionType;
};

export const ArticleParamsForm = () => {
	const defaultValues = {
		fontFamily: defaultArticleState.fontFamilyOption,
		fontSize: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		bgColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	};

	const [isOpen, setIsOpen] = useState(false);

	const [value, setValue] = useState<TFormValue>(defaultValues);

	const handleArrowButtonClick = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleArrowButtonClick} />
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						{'Задайте параметры'}
					</Text>
					<Select
						selected={value.fontFamily}
						title='ШРИФТ'
						options={fontFamilyOptions}
						onChange={(option) =>
							setValue((prev) => ({ ...prev, fontFamily: option }))
						}
					/>
					<RadioGroup
						name='fontSize'
						selected={value.fontSize}
						title='РАЗМЕР ШРИФТА'
						options={fontSizeOptions}
						onChange={(option) =>
							setValue((prev) => ({ ...prev, fontSize: option }))
						}
					/>
					<Select
						selected={value.fontColor}
						title='ЦВЕТ ШРИФТА'
						options={fontColors}
						onChange={(option) =>
							setValue((prev) => ({ ...prev, fontColor: option }))
						}
					/>
					<Separator />
					<Select
						selected={value.bgColor}
						title='ЦВЕТ ФОНА'
						options={backgroundColors}
						onChange={(option) =>
							setValue((prev) => ({ ...prev, bgColor: option }))
						}
					/>
					<Select
						selected={value.contentWidth}
						title='ШИРИНА КОНТЕНТА'
						options={contentWidthArr}
						onChange={(option) =>
							setValue((prev) => ({ ...prev, contentWidth: option }))
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};

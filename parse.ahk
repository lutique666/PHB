FileEncoding, UTF-8

;Старый парс коментов. Переделано на новую F6:
f6::
;Парсим F:\spell\DnD_5_zaklinania_v1_47a\xl\comments1.xml
;Сносим лишние теги оставляем ref для отбивки и последующей замены
FileDelete,  F:\spell\tmp.txt
FileDelete,  F:\spell\tmp0.txt
FileSelectFile, filename, F:\spell\DnD_5_zaklinania_v1_47a\xl\

FileRead, tmp, %filename%
StringReplace, tmp, tmp, <, `n@, all
StringReplace, tmp, tmp, >, @, all
StringReplace, tmp, tmp, @t@, , all
StringReplace, tmp, tmp, @t xml:space="preserve"@, , all


FileAppend, %tmp%, F:\spell\tmp0.txt

Loop, Read, F:\spell\tmp0.txt
{
	string = %A_LoopReadLine%


	IfInString, string, @
	{
		IfInString, string, ref
		{
			Loop, parse, string, %A_space%
			{
			IfInString, A_LoopField, ref
			{
			append = `n`n%A_LoopField%
			}
			}
		}
		Else
		{
			append = ;
		}
		
	}

	Else
	{
	append = `n%string%
	}


FileAppend, %append%, f:\spell\tmp.txt
}

;Очистка пустых строк
FileDelete,  F:\spell\tmp0.txt
Loop, Read, F:\spell\tmp.txt
{
	lengh := StrLen(A_LoopReadLine)
	If lengh = 0
	{
	 append = ;
	}
	
	Else
	{
	append = `n%A_LoopReadLine%
	}
	
FileAppend, %append%, F:\spell\tmp0.txt
}

FileDelete,  F:\spell\tmp.txt
Loop, Read, F:\spell\tmp0.txt
{
	
	IfInString, A_LoopReadLine, ref
	{
	 append = `n%A_LoopReadLine%`n
	}
	
	Else
	{
	append = %A_LoopReadLine%`n
	}
	
FileAppend, %append%, F:\spell\tmp.txt

}
;FileDelete,  F:\spell\tmp0.txt
return

f7::
;Берем список заклинаний/заговоров (для всех остальных, у барда другие столбцы) из таблицы.
;Вставляем в текстовуху.
;Отбиваем круги пустыми строками.
;Cурсы отбиваем @
FileSelectFile, filename, F:\spell\
i=2
j=0
Loop, Read, %filename%
{


		if j = 0
		{
		letter = A
		}
		if j = 1
		{
		letter = F
		}
		if j = 2
		{
		letter = K
		}
		if j = 3
		{
		letter = P
		}
		if j = 4
		{
		letter = U
		}
		if j = 5
		{
		letter = Z
		}
		if j = 6
		{
		letter = AE
		}
		if j = 7
		{
		letter = AJ
		}
		if j = 8
		{
		letter = AO
		}
		if j = 9
		{
		letter = AS
		}
	
		lengh := StrLen(A_LoopReadLine)
		if lengh = 0
			{
				j++
				i = 2
				fileappend, `n, F:\spell\tmp2.txt
			}
		Else
			{
				i++
				append = %A_LoopReadLine%@%letter%@%i%`n
				fileappend, %append%, F:\spell\tmp2.txt
			}

			


}
return


f8::
Loop, Read, F:\spell\tmp2.txt
{
	string = %A_LoopReadLine%
	i=1
	spellname = ;
	Loop, Parse, string, @
	{
		
		if i = 1
		{
			spellname = %A_loopField%	
		}
		if i = 2
		{
			spellname = %spellname%%A_space%%A_loopField%	
		}
		if i = 3
		{
			ref_letter = %A_LoopField%
			x=0
		}
		if i = 4
		{
			ref_number =  %A_LoopField%
			ref = %ref_letter%%ref_number%
			

		Loop, Read, F:\spell\tmp.txt
		{
			spellstring = %A_LoopReadLine%
			lengh := StrLen(spellstring)
			IfInString, spellstring, %ref%
			{
				x=1
				
				;FileAppend, %spellname%`n%A_LoopReadLine%`n, F:\spell\круг%ref_letter%.txt
				FileAppend, %spellname%`n%A_LoopReadLine%`n, F:\spell\все-чернокнижник.txt
			}
			if x=1
			{
				;FileAppend, %A_LoopReadLine%`n, F:\spell\круг%ref_letter%.txt
				FileAppend, %A_LoopReadLine%`n, F:\spell\все-чернокнижник.txt
				If lengh = 0
				{
				break
				}
			}
			

			
			
			
		}
		
		}
		

		i++
	}







}
return

f9::
;Берем все коменты и копируем.
;StringReplace
FileSelectFile, filename, F:\spell\
tmp = ;
FileRead, tmp, %filename%
StringReplace, tmp, tmp, ДиДаша, , all
StringReplace, tmp, tmp, ref=D-, , all
StringReplace, tmp, tmp, ref=Mref=An, , all
StringReplace, tmp, tmp, Zerref=Athul, , all
StringReplace, tmp, tmp, Zerref=ref=Athul, , all
StringReplace, tmp, tmp, Пользователь Winref=Dowref=S, , all
StringReplace, tmp, tmp, Айвендил Заклинатель, , all

;StringReplace, tmp, tmp, A, ref=A, all
;StringReplace, tmp, tmp, D, ref=D, all
;StringReplace, tmp, tmp, G, ref=G, all
;StringReplace, tmp, tmp, J, ref=J, all
;StringReplace, tmp, tmp, M, ref=M, all
;StringReplace, tmp, tmp, P, ref=P, all
;StringReplace, tmp, tmp, S, ref=S, all
;StringReplace, tmp, tmp, V, ref=V, all

FileDelete, F:\spell\tmp-tmp.txt
FileAppend, %tmp%, F:\spell\tmp-tmp.txt

Loop, Read, F:\spell\tmp-tmp.txt
{
lengh := StrLen(A_LoopReadLine)
	if lengh =< 1
	{

	}
	Else
	{
		IfInString, A_LoopReadLine, ref
		{
			FileAppend, `n%A_LoopReadLine%`n, F:\spell\tmp.txt
		} 
		Else
		{
			FileAppend, %A_LoopReadLine%`n, F:\spell\tmp.txt
		}
	
	}

}
return

f10::
;Берем список заклинаний/заговоров барда из таблицы.
;Вставляем в текстовуху.
;Отбиваем круги пустыми строками.
;Cурсы отбиваем @
FileSelectFile, filename, F:\spell\
i=2
j=0
Loop, Read, %filename%
{



		if j = 0
		{
		letter = A
		}
		if j = 1
		{
		letter = D
		}
		if j = 2
		{
		letter = G
		}
		if j = 3
		{
		letter = J
		}
		if j = 4
		{
		letter = M
		}
		if j = 5
		{
		letter = P
		}
		if j = 6
		{
		letter = S
		}
		if j = 7
		{
		letter = V
		}
		if j = 8
		{
		letter = Y
		}
		if j = 9
		{
		letter = AB
		}
	
		lengh := StrLen(A_LoopReadLine)
		if lengh = 0
			{
				j++
				i = 2
				fileappend, `n, F:\spell\tmp2.txt
			}
		Else
			{
				i++
				append = %A_LoopReadLine%@%letter%@%i%`n
				fileappend, %append%, F:\spell\tmp2.txt
			}

			


}
return


README: Componentes Atómicos Custom en React Native
---------------------------------------------------

Descripción
-----------
Este proyecto contiene una colección de **componentes atómicos personalizados** desarrollados en React Native. 
Los componentes atómicos son la base para construir interfaces más complejas, siguiendo el principio del diseño atómico. 
Estos componentes son reutilizables, flexibles y fáciles de personalizar.

Componentes Disponibles
-----------------------

1. CustomButton
   Un botón altamente personalizable con soporte para íconos.

   Props:
   - `title` (string): Texto del botón.
   - `onPress` (() => void): Acción al presionar el botón.
   - `icon` (IconProp): Ícono de FontAwesome.
   - `iconPosition` ('left' | 'right'): Posición del ícono (por defecto: 'left').
   - `iconColor` (string): Color del ícono (por defecto: 'white').
   - `iconSize` (number): Tamaño del ícono (por defecto: 20).
   - `disabled` (boolean): Deshabilita el botón (por defecto: false).
   - `theme` ('light' | 'dark'): Tema claro u oscuro (por defecto: 'light').
   - `style` (ViewStyle): Estilo del contenedor.
   - `textStyle` (TextStyle): Estilo del texto.

   Uso:
   ```tsx
   <CustomButton 
     title="Enviar" 
     onPress={() => alert('¡Botón presionado!')} 
     icon="paper-plane" 
     iconPosition="right" 
     theme="dark" 
   />
   ```

2. CustomTextInput
   Un campo de texto flexible con validaciones dinámicas y soporte para diferentes tipos de datos.

   Props:
   - `placeholder` (string): Texto placeholder.
   - `value` (string): Valor actual del input.
   - `onChangeText` ((text: string) => void): Acción al cambiar el texto.
   - `validationType` ('text' | 'password' | 'number' | 'date' | 'email'): Tipo de validación.
   - `errorMessage` (string): Mensaje de error personalizado.
   - `style` (ViewStyle): Estilo personalizado del contenedor.
   - `inputStyle` (TextStyle): Estilo personalizado del input.
   - `errorStyle` (TextStyle): Estilo del texto de error.
   - `secureTextEntry` (boolean): Oculta el texto (para contraseñas).
   - `keyboardType` ('default' | 'numeric' | 'email-address'): Tipo de teclado.

   Uso:
   ```tsx
   <CustomTextInput 
     placeholder="Correo Electrónico" 
     value={email} 
     onChangeText={setEmail} 
     validationType="email" 
     errorMessage="Por favor ingresa un correo válido" 
   />
   ```

3. CustomLabel
   Componente simple para mostrar texto con estilos personalizados.

   Props:
   - `text` (string): Contenido del texto.
   - `style` (TextStyle): Estilo personalizado del texto.

   Uso:
   ```tsx
   <CustomLabel text="Nombre de Usuario" style={{ color: 'blue', fontSize: 18 }} />
   ```

4. CustomCheckbox
   Un componente de casilla de verificación reutilizable.

   Props:
   - `isChecked` (boolean): Estado actual de la casilla.
   - `onToggle` (() => void): Acción al cambiar el estado.
   - `label` (string): Etiqueta junto a la casilla.
   - `labelStyle` (TextStyle): Estilo personalizado de la etiqueta.

   Uso:
   ```tsx
   <CustomCheckbox 
     isChecked={isAgreed} 
     onToggle={() => setAgreed(!isAgreed)} 
     label="Acepto los términos y condiciones" 
   />
   ```

5. CustomSwitch
   Un interruptor simple para activación/desactivación.

   Props:
   - `isEnabled` (boolean): Estado actual del switch.
   - `onToggle` (() => void): Acción al cambiar el estado.

   Uso:
   ```tsx
   <CustomSwitch 
     isEnabled={isNotificationsOn} 
     onToggle={() => setNotificationsOn(!isNotificationsOn)} 
   />
   ```

6. CustomAvatar
   Componente para mostrar un avatar con soporte para personalización de tamaño y bordes.

   Props:
   - `imageUrl` (string): URL de la imagen.
   - `size` (number): Tamaño del avatar (ancho/alto).
   - `borderColor` (string): Color del borde del avatar.

   Uso:
   ```tsx
   <CustomAvatar 
     imageUrl="https://example.com/avatar.jpg" 
     size={100} 
     borderColor="#007BFF" 
   />
   ```

7. CustomLoader
   Indicador de carga visual.

   Props:
   - `size` ('small' | 'large'): Tamaño del indicador.
   - `color` (string): Color del indicador.

   Uso:
   ```tsx
   <CustomLoader size="large" color="red" />
   ```

8. CustomDivider
   Un divisor visual simple.

   Props:
   - `color` (string): Color del divisor.
   - `thickness` (number): Grosor del divisor.
   - `style` (ViewStyle): Estilo personalizado del divisor.

   Uso:
   ```tsx
   <CustomDivider color="#007BFF" thickness={2} />
   ```

9. CustomBadge
   Un pequeño componente para mostrar etiquetas o contadores.

   Props:
   - `text` (string | number): Contenido del badge.
   - `color` (string): Color del fondo del badge.
   - `textColor` (string): Color del texto del badge.

   Uso:
   ```tsx
   <CustomBadge text="Nuevo" color="green" />
   ```

Instalación
-----------
1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/componentes-atomicos.git
   cd componentes-atomicos
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. ¡Listo! Ahora puedes importar los componentes en tu proyecto.

Contribuciones
--------------
Si deseas contribuir, puedes crear un pull request o reportar un problema en el repositorio.

Licencia
--------
Este proyecto está bajo la Licencia MIT.

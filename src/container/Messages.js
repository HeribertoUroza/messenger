import React from 'react';
import { Redirect } from 'react-router';

// CONTEXT
import AuthContext from '../context/AuthContext';

// BOOTSTRAP IMPORTS
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Messages() {
    return (
        <>
            <AuthContext.Consumer>
                {
                    (isUser) => {
                        if(!isUser){
                            return (
                                <>
                                    <div className='messages-container'>
                                        <div className='messages-all'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et felis id leo scelerisque laoreet. Maecenas vitae nulla luctus erat placerat scelerisque non eget dui. Donec ipsum libero, mollis non neque vitae, accumsan commodo felis. Ut ac suscipit velit. Proin eu laoreet tortor. Pellentesque condimentum diam vel felis facilisis, interdum porta nisi dictum. Vivamus venenatis, tortor eu fermentum aliquet, nisl diam iaculis elit, ac bibendum nisi magna vitae nunc. Fusce at tincidunt tellus. Fusce accumsan scelerisque nulla ac laoreet.

Aenean orci mi, consectetur imperdiet risus at, efficitur eleifend justo. Etiam pellentesque felis nec vulputate pellentesque. Phasellus interdum condimentum nulla, id facilisis nisl viverra sed. Suspendisse id auctor erat. Sed blandit lectus quis lacus dictum, vel fermentum nibh porttitor. Etiam vel felis non lorem cursus sollicitudin. Ut sodales nisi non ligula vestibulum, id dictum leo rhoncus. Etiam auctor, sapien ac facilisis iaculis, ex magna commodo arcu, id tempor libero ante facilisis dui.

Maecenas sit amet eros eu mi molestie euismod sed vitae arcu. Sed posuere varius quam, sed bibendum sapien hendrerit quis. Curabitur ligula quam, ornare nec porta ut, fringilla ut libero. Praesent eget hendrerit tortor. Aenean at volutpat nulla. Nullam tempus rutrum odio, id luctus purus sagittis ac. Praesent rutrum porttitor euismod. In a vehicula arcu. Duis sed volutpat risus. Nunc eu mollis odio. Donec eu sollicitudin turpis, non ultrices mauris. Sed vel dui magna.

Proin luctus id ligula sed maximus. Nulla efficitur risus non convallis congue. Sed eu tristique risus, non convallis urna. Quisque euismod ut dolor ut dapibus. Aliquam pulvinar est ultricies sem sodales, eu pellentesque odio feugiat. Mauris egestas, felis a eleifend tristique, metus eros dignissim quam, quis ullamcorper dui ex eget lectus. Mauris egestas mauris eget diam dictum, et hendrerit arcu vestibulum. In hac habitasse platea dictumst. Duis eget ullamcorper urna, in condimentum nisi. Nulla dolor nunc, porta sed leo sit amet, blandit imperdiet erat. Nunc vulputate accumsan lorem quis fermentum. Duis pharetra lacus quis mi hendrerit consectetur.

Mauris sed cursus lectus. Aenean id accumsan quam. In quis lorem fermentum, scelerisque tortor at, lacinia nulla. Suspendisse potenti. Vestibulum blandit justo id aliquet viverra. Donec odio elit, hendrerit a sapien eu, efficitur fermentum ante. Donec viverra felis ipsum.

Ut semper, leo id auctor tincidunt, risus sem scelerisque nisl, quis porta purus velit sed ante. Cras maximus lorem vel eleifend tincidunt. Aliquam facilisis aliquet purus ut ultricies. Morbi ac ante in enim suscipit scelerisque eget a dui. Vestibulum efficitur placerat urna. Etiam laoreet euismod nunc, ac aliquet tellus feugiat at. Nullam vitae eros nec tellus suscipit iaculis non eget est. Donec dictum vel tortor et gravida. Aliquam at sapien in eros placerat aliquam. Nunc fermentum lectus ac dui luctus malesuada. Ut ultrices, velit sed dignissim imperdiet, felis odio convallis augue, a tincidunt felis velit sed urna. In vestibulum, nunc in volutpat suscipit, nulla tellus condimentum nisi, ut molestie ipsum nibh in sapien. In eu mauris quis arcu pulvinar gravida. In et pellentesque mauris, sit amet scelerisque nibh.

Ut at semper quam. Morbi dolor mauris, ultricies tempus hendrerit nec, dignissim sed sapien. Ut nisl nisl, aliquet at mauris eget, tristique porta arcu. In nec magna ornare, fringilla lectus a, tincidunt leo. Vivamus gravida placerat enim, et fermentum sem. Morbi bibendum posuere nunc a lacinia. Morbi finibus libero ac egestas feugiat. Integer ultricies consectetur tellus ac ullamcorper. Aenean ornare justo metus, id dictum purus imperdiet tincidunt. Proin non neque placerat, rutrum turpis eget, luctus tellus.

Integer aliquet nisi neque, vitae finibus mauris malesuada eu. Nam condimentum ipsum quis accumsan malesuada. Ut iaculis ex id sem vehicula fringilla. Duis sagittis enim et nisi congue sollicitudin. Sed auctor metus augue, et efficitur felis mollis eget. Proin et libero quis felis venenatis molestie vel nec nisl. Curabitur lorem ex, lobortis at justo in, porta auctor ipsum. Praesent feugiat rutrum augue, eu commodo leo tempus a. Nulla a nisl lacus. Sed id interdum mi. Cras molestie ipsum tellus, non laoreet urna lobortis porta. Sed interdum ultricies justo, in porta nisl eleifend id. Aenean vitae bibendum magna, quis imperdiet nisl. Morbi et ex convallis, molestie tortor quis, sagittis tellus. Praesent est sapien, iaculis nec mauris ut, lobortis rhoncus magna. Sed et neque dignissim, blandit nunc a, feugiat velit.

Integer id viverra nisl, non molestie lacus. Nunc a accumsan odio. Etiam mattis lectus in sagittis tristique. Integer sit amet quam in risus venenatis tincidunt. Cras eget tellus ac ligula lacinia accumsan. Vestibulum ullamcorper vestibulum consectetur. Nullam venenatis ipsum et sodales facilisis. Duis congue sollicitudin turpis, quis efficitur purus scelerisque quis. Maecenas a purus sed augue accumsan vestibulum. Aliquam erat volutpat. Morbi eu augue a ligula aliquam porta vel eget massa. Nulla sit amet condimentum magna. Aenean quis erat libero.

Etiam dignissim auctor aliquet. Aliquam vitae mauris pulvinar, bibendum felis at, varius metus. Nam maximus nisi at massa viverra tristique. Quisque eu odio non lacus consequat bibendum at at elit. Donec consectetur, libero vel eleifend vehicula, mi nulla commodo risus, eget feugiat quam purus eu erat. Nulla hendrerit augue cursus placerat volutpat. Proin eget metus enim. Integer placerat at massa id iaculis. Aenean sollicitudin nisl ut bibendum pretium. Aliquam facilisis ligula nec nisl ultricies, at facilisis tellus tempus. Ut id tortor orci. Integer elementum leo quam, at iaculis dolor rutrum congue. Pellentesque ac orci nec massa accumsan laoreet nec id metus. Mauris dapibus vestibulum risus quis consectetur.
                                        </div>
                                        <div className='messages-input'>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    aria-label="messageText"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Append>
                                                    <Button variant="outline-secondary">Send</Button>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </>
                            )
                        } else {
                            return <Redirect to='/' />
                        }
                    }
                }
            </AuthContext.Consumer>
        </>
    )
}

export default Messages;